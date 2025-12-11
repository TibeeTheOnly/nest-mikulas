import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsValidMaterial(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidMaterial',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && ['wood', 'plastic', 'metal'].includes(value.toLowerCase());
        },
        defaultMessage(args: ValidationArguments) {
          return 'Material must be one of: wood, plastic, metal';
        }
      }
    });
  };
}
