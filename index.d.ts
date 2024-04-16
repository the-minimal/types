export type Pretty<$Type> = { [$Key in keyof $Type]: $Type[$Key] } & {};

export type Nullable<$Type> = $Type | null;

export type Optional<$Type> = $Type | undefined;

export type Nullish<$Type> = $Type | null | undefined;

export type Either<$Left, $Right> = $Left | $Right;

export type Predicate = (value: unknown) => boolean;

export type InferPredicate<$Predicate extends Predicate<unknown>> =
	$Predicate extends Predicate<infer $Type> ? $Type : never;

export type Check<$Type> = (value: unknown) => $Type;

export type InferCheck<$Assertion extends Check<unknown>> =
	$Assertion extends Check<infer $Type> ? $Type : never;

export type Class<$Type> = { new (): $Type };
