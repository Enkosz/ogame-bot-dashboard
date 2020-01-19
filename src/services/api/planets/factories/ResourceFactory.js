export const ResourceFactory = (resources) => {
  const parsedResources = {
    metal: resources.Metal,
    crystal: resources.Crystal,
    deuterium: resources.Deuterium,
    energy: resources.Energy,
    darkmatter: resources.Darkmatter,
  }

  const transformedResources = Object.keys(parsedResources).map((resource) => {
    return {
      type: 'resource',
      name: resource,
      count: parsedResources[resource]
    }
  })

  return transformedResources;
}
