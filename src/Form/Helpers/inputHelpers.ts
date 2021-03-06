/** Libraries */
import React from 'react';
import PropTypes from 'prop-types';
import {pick} from 'lodash';

/** Components */
import {PossibleInputValue, ValueProp, TypeProp, IdProp,
        InputValidationProps, NameProp, BaseReactProps} from '../../../typings/types.d';

/** Interfaces */
interface PickedAttrs {
  [name: string]: any
}
interface GetHTMLAttributesGuard extends ValueProp<PossibleInputValue>, BaseReactProps, TypeProp, IdProp {}

/**
 * Checks whether the specified input field is a multi-value
 * input field or not
 * @param inputName The name of the input which needs to be checked
 */
export const isMultipleValueInput = (inputName: string): boolean => {
  return inputName.search(/\[\]$/) !== -1;
}

/**
 * Checks all the supplied values and returns
 * the appropriately validated value
 * @param check Test for the values supplied
 * @param args Values that need to be checked with the test provided
 */
export function returnCheckedValue<T>(check:(arg:T) => boolean, ...args:T[]){
  const innerReturnCheckedValue = (index = 0):T|undefined => {
    if (index === args.length) {
      return undefined;
    } else if (check(args[index])) {
      return args[index];
    }
    return innerReturnCheckedValue(index + 1);
  };
  return innerReturnCheckedValue();
};

/**
 * getHTMLAttributes
 * @param props All the props on which the 'picking' is performed
 */
export const getHTMLAttributes = <T extends GetHTMLAttributesGuard> (props:T) => {
  const safeProps = pick<PickedAttrs>(props, "id", "autoFocus", "required", "name", "type", "value", "min", "max", "minLength", "maxLength", "pattern", "accept", "multiple", "placeholder", "disabled", "rows");
  return safeProps;
}