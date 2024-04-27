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

export type Brand<$Name extends string, $Value = None, $Props = None> = {
	readonly [$$Name in $Name as `__${$$Name}_brand`]: {
		value: $Value;
		props: $Props;
	};
};

export type AnyBrand = Brand<any, any>;

export type Tag<$Name extends string> = {
	readonly [$$Name in $Name as `__${$$Name}_brand`]: never;
};

export type AnyTag = Tag<any>;

export type None = Tag<"none">;
