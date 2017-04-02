// Box :: a -> Box a
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`,
})

// Right :: b -> Either a b
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
})

// Left :: a -> Either a b
const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
})

module.exports = {
  Box,
  Left,
  Right,
}
