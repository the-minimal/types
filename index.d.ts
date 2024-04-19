export type Pretty<$Type> = { [$Key in keyof $Type]: $Type[$Key] } & {};

export type Nullable<$Type> = $Type | null;

export type Optional<$Type> = $Type | undefined;

export type Nullish<$Type> = $Type | null | undefined;

export type Either<$Left, $Right> = $Left | $Right;

export type Predicate = (value: unknown) => boolean;

export type Assertion<$Type> = (value: unknown) => asserts value is $Type;

export type UnknownAssertion = Assertion<unknown>;

export type InferAssertion<$Assertion extends Assertion<unknown>> =
	$Assertion extends Assertion<infer $Type> ? $Type : never;

export type Class<$Type> = { new (): $Type };

export type UnknownClass = Class<unknown>;

export type CustomError<
	$Type extends string,
	$Reason extends string,
	$Value = Optional<unknown>,
	$Props = Optional<unknown>,
	$Message = Optional<string>,
> = {
	type: $Type;
	reason: $Reason;
	value: $Value;
	props: $Props;
	message: $Message;
};
