export const PlanetFactory = (planet) => {
  return {
    id: planet.ID,
    name: planet.Name,
    diameter: planet.Diameter,
    coordinate: {
      galaxy: planet.Coordinate.Galaxy,
      system: planet.Coordinate.System
    }
  }
}
