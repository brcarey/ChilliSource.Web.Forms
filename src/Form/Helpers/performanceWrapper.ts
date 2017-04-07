import {PropTypes} from "react";
import * as Recompose from "recompose";
import {getContext, withProps, shouldUpdate, withHandlers, compose, lifecycle} from "recompose";
import {Map} from "immutable";
import {isUndefined, pick} from "lodash";
import {isMultipleValueInput, returnDefinedValue} from "./inputHelpers";
import createSpecificShallowEqual from "../../../libs/createSpecificShallowEqual"
import {setInput, setInputInteraction, setValidation} from "../Actions/fields";
import {ShallowCompareProps, ReactComponent, BaseReactProps, ShallowCompare} from "../../../libs/types";
import {PerformanceWrapperContext, PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, PerfomanceWrapperGetInputPath, PerformanceWrapperInputHelpers, NameProp, IdProp, TypeProp} from "../Types/types"
import {DefaultValueProp, PossibleDefaultValues, InputInfoProps, DefaultSwitchProps, NameSpaceProp, FormStateProp, ValueProp} from "../Types/types"

const specificShallowEqual = createSpecificShallowEqual("inputInfo", "inputGroupInfo", "name", "nameSpace", "type", "id", "disabled", "required", 
"className", "defaultValue", "defaultChecked", "defaultSelected", "options", "fieldSetNameSpace", "value");

const specificShallowEqualDefault = createSpecificShallowEqual("defaultValue");

interface WithHandlersGuard extends NameProp, IdProp, TypeProp, DefaultSwitchProps, DefaultValueProp<PossibleDefaultValues>, NameProp, BaseReactProps, ValueProp, IdProp, TypeProp{}

interface GetHTMLAttributesGuard extends ValueProp, BaseReactProps, TypeProp, IdProp{}

export interface PerformanceWrapperProps extends PerformanceWrapperWithProps, PerformanceWrapperWithHandlers, PerformanceWrapperContext {}

const getUnsetValue = ({type}:{type?:string}):boolean | string  => {
  if (type === 'radio' || type === 'checkbox') {
    return false;
  } else {
    return '';
  }
};

export default <TOutter extends WithHandlersGuard> (ReactClass:ReactComponent<TOutter & PerformanceWrapperProps>) => {

  const InputSetup = {
    componentWillMount() {
      this.props.inputChanged(this.props.value, false);
    },

    componentWillReceiveProps(nextProps:PerformanceWrapperProps & TOutter){
      if (!specificShallowEqualDefault(nextProps, this.props)) {
        nextProps.inputChanged(nextProps.defaultValue, false);
      }
      if (!nextProps.FormState.hasIn([nextProps.nameSpace, ...nextProps.inputPath])) {
        nextProps.inputChanged(nextProps.value, false);
      }
    }
  };

  return compose<PerformanceWrapperProps, TOutter>(
    getContext<PerformanceWrapperContext, TOutter>({
      nameSpace: PropTypes.string,
      FormState: PropTypes.object,
      fieldSetNameSpace: PropTypes.string,
      dispatch: PropTypes.func
    }),

    withHandlers<PerfomanceWrapperGetInputPath, PerformanceWrapperContext & TOutter>({
      getInputPath: ({nameSpace, name, id, fieldSetNameSpace}) => ():string[] => {
        if (fieldSetNameSpace !== undefined) {
          return `${fieldSetNameSpace}/${name}`.split('/');
        } else if (isMultipleValueInput(name)) {
          return `${name}/${id}`.split('/');
        } else {
          return `${name}`.split('/');
        }
      }
    }),
    withHandlers<PerformanceWrapperInputHelpers, PerfomanceWrapperGetInputPath & PerformanceWrapperContext & TOutter>({
      inputChanged: ({dispatch, nameSpace, name, getInputPath}) => (value, changed = true) => {
        dispatch(setInput(nameSpace, getInputPath(), value));
        dispatch(setInputInteraction(nameSpace, getInputPath(), 'changed', changed));
      },
      setInputBlurred: ({dispatch, nameSpace, getInputPath}) => () => {
        dispatch(setInputInteraction(nameSpace, getInputPath(), 'blurred', true));
      },
      setValidation: ({dispatch, nameSpace, getInputPath}) => (type, test) => {
        dispatch(setValidation(nameSpace, getInputPath(), type, test));
      },
      getHTMLAttributes:<T extends GetHTMLAttributesGuard> () => (props:T) => {
        const {children} = props
        const safeProps = pick<React.HTMLAttributes<any>, T>(props, "id", "autoFocus", "required", "name", "type", "value");
        if (props.type === 'checkbox' || props.type === 'radio') {
          if (props.type === 'radio') {
            return Object.assign({}, safeProps, {
              checked: props.id + "" === props.value + ""
            });
          } else {
            return Object.assign({}, safeProps, {
              checked: props.value
            });
          }
        }
        return safeProps;
      }
    }),
    withProps<PerformanceWrapperWithProps, PerformanceWrapperWithHandlers & PerformanceWrapperContext & TOutter>(props => {
      const inputPath = props.getInputPath();
      const inputInfoPath = inputPath.slice(0, inputPath.length - 1);
      const inputInfo = props.FormState.getIn([props.nameSpace, ...inputPath], Map())
      const {defaultValue, defaultChecked, defaultSelected} = props;
      const allInputsDefaultValue = returnDefinedValue(defaultValue, defaultChecked, defaultSelected);
      const value = returnDefinedValue<ShallowCompare>(inputInfo.get('value'), props.value, allInputsDefaultValue, getUnsetValue(props));
      return {
        inputInfo,
        inputGroupInfo: inputInfoPath.length > 0 ? props.FormState.getIn([props.nameSpace, ...inputInfoPath], Map({})) : Map(),
        defaultValue: allInputsDefaultValue,
        inputPath,
        value
      };
    }),
    shouldUpdate<PerformanceWrapperProps & TOutter>((props, nextProps) => {
      return !specificShallowEqual(props, nextProps);
    }),
    lifecycle(InputSetup)
  )(ReactClass);
}


