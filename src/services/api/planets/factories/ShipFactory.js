export const ShipFactory = (ships) => {
  const parsedShips = {
    lightFighter: ships.LightFighter,
    heavyFighter: ships.HeavyFighter,
    cruiser: ships.Cruiser,
    battleship: ships.Battleship,
    battlecruiser: ships.Battlecruiser,
    bomber: ships.Bomber,
    destroyer: ships.Destroyer,
    deathstar: ships.Deathstar,
    smallCargo: ships.SmallCargo,
    largeCargo: ships.LargeCargo,
    colonyShip: ships.ColonyShip,
    recycler: ships.Recycler,
    espionageProbe: ships.EspionageProbe,
    solarSatellite: ships.SolarSatellite,
  }

  const transformedShips = Object.keys(parsedShips).map((ship) => {
    return {
      type: 'ship',
      name: ship,
      count: parsedShips[ship]
    }
  })

  return transformedShips;
}
