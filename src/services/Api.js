/**
 * @author Mateusz Cholcha
 */

const mapEpisodes = episodes => {
  return episodes.map(episode => ({
    ...episode,
    characters: episode.characters.map(character => character.name)
  }))
}

const getEpisodes = (page = 1) => {
  return fetch('https://rickandmortyapi.com/graphql', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
      query ($page: Int) {
        episodes(page: $page) {
          info {
            pages
          }
          results {
            id
            name
            air_date
            episode
            characters {
              name
            }
          }
        }
      }`,
      variables: { "page": page }
    })
  })
    .then(res => res.json())
    .then(response => {
      return {
        pages: response.data.episodes.info.pages,
        episodes: mapEpisodes(response.data.episodes.results)
      }
    })
    .catch(error => {
      //TODO
      console.error('error', error)
    })
}

export {
  getEpisodes
}
