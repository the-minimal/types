export type Pretty<$Type> = { [$Key in keyof $Type]: $Type[$Key] } & {};

export type Nullable<$Type> = $Type | null;

export type Optional<$Type> = $Type | undefined;

export type Nullish<$Type> = $Type | null | undefined;

export type Either<$Left, $Right> = $Left | $Right;

export type Intersection<$Values extends unknown[]> = $Values extends [
	infer $Head,
	...infer $Tail,
]
	? $Tail extends [infer _1, ...infer _2]
		? $Head & Intersection<$Tail>
		: $Head
	: never;
