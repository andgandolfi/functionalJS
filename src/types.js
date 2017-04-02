// Box :: a -> Box a
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
})

// Right :: b -> Either a b
const Right = x => ({
  map: f => Right(f(x)),
  chain: f => f(x),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

// Left :: a -> Either a b
const Left = x => ({
  map: f => Left(x),
  chain: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
})

// fromNullable :: b -> a -> Either a b
const fromNullable = (x, err = null) =>
  x != null ? Right(x) : Left(err)

// tryCatch :: (() -> a) -> Either b a
const tryCatch = f => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

module.exports = {
  Box,
  Left,
  Right,
  fromNullable,
  tryCatch,
}
