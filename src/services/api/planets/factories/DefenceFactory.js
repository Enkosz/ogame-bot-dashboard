export const DefenceFactory = (defence) => {
  const parsedDefence = {
    rocketLauncher: defence.RocketLauncher,
    lightLaser: defence.LightLaser,
    heavyLaser: defence.HeavyLaser,
    gaussCannon: defence.GaussCannon,
    ionCannon: defence.IonCannon,
    plasmaTurret: defence.PlasmaTurret,
    smallShieldDome: defence.SmallShieldDome,
    largeShieldDome: defence.LargeShieldDome,
    antiBallisticMissiles: defence.AntiBallisticMissiles,
    interplanetaryMissiles: defence.InterplanetaryMissiles,
  }

  const transformedDefence = Object.keys(parsedDefence).map((defense) => {
    return {
      type: 'defense',
      name: defense,
      count: parsedDefence[defense]
    }
  })

  return transformedDefence;
}
