export type Pretty<$Type> = { [$Key in keyof $Type]: $Type[$Key] } & {};

export type Nullable<$Type> = $Type | null;

export type Optional<$Type> = $Type | undefined;

export type Nullish<$Type> = $Type | null | undefined;

export type Either<$Left, $Right> = $Left | $Right;

export type Assertion<$Type> = (value: unknown) => asserts value is $Type;

export type UnknownAssertion = Assertion<unknown>;

export type InferAssertion<$Assertion extends Assertion<unknown>> =
	$Assertion extends Assertion<infer $Type> ? $Type : never;

export type Intersection<$Values extends unknown[]> = $Values extends [
	infer $Head,
	...infer $Tail,
]
	? $Tail extends [infer _1, ...infer _2]
		? $Head & Intersection<$Tail>
		: $Head
	: never;
