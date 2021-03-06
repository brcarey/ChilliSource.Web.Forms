/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import InputGroup from '../Form/InputGroup';
import InputWrapper from '../Form/InputWrapper';
import InputBase from './Base';
import DisplayValidation from '../Validation/DisplayValidation';
import performanceWrapper from '../Form/Helpers/performanceWrapper';

/** Interfaces */
import {TextInputProps, PerformanceWrapperProps} from '../../typings/types.d';

/** Class Input */
export class Input extends React.Component<TextInputProps & PerformanceWrapperProps, {}> {
  render (){
    const {className, label, labelPostfix, labelPrefix, prepend, append, ...props} = this.props;
    const {autoFocus, onChange, onBlur, id, value, ...validationProps} = props;
    const classes:string = classnames(className, 'input');
    
    if (props.type !== 'hidden') {
      return (
        <InputWrapper className={classes} type={props.type} name={props.name} labelPrefix={labelPrefix} labelPostfix={labelPostfix} label={label}>
          <InputGroup prepend={prepend} append={append}>
            <InputBase {...props} />
          </InputGroup>
          <DisplayValidation {...validationProps} />
        </InputWrapper>
      );
    }
    return <InputBase {...props} />
  }
};

export default performanceWrapper<TextInputProps>(Input);