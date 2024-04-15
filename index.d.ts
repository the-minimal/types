export type Pretty<$Type> = { [$Key in keyof $Type]: $Type[$Key] } & {};

export type Nullable<$Type> = $Type | null;

export type Optional<$Type> = $Type | undefined;

export type Nullish<$Type> = $Type | null | undefined;

export type Either<$Left, $Right> = $Left | $Right;

export type Predicate = (value: unknown) => boolean;

export type InferPredicate<$Predicate extends Predicate<unknown>> =
	$Predicate extends Predicate<infer $Type> ? $Type : never;

export type Assertion<$Type> = (value: unknown) => asserts value is $Type;

export type InferAssertion<$Assertion extends Assertion<unknown>> =
	$Assertion extends Assertion<infer $Type> ? $Type : never;

export type Class<$Type> = { new (): $Type };
