import React, {useEffect, useState} from "react";
import "./App.css";
import Episodes from "./components/Episodes"
import Loader from "./components/Loader"
import {getEpisodes} from "./services/Api"
import Pagination from "./components/Pagination"


function App() {
  const [page, setPage] = useState(1)
  const [allPages, setAllPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    setLoading(true)
    getEpisodes(page).then(({episodes, pages}) => {
      setEpisodes(episodes);
      setAllPages(pages);
      setLoading(false)
    })
  }, [page])


  return (
    <main className="side-container">
      <Loader loading={loading}>
        <Episodes episodes={episodes} />

        <Pagination
          page={page}
          pages={allPages}
          onChangePage={newPage => setPage(newPage)}
        />
      </Loader>
    </main>
  );
}

export default App;
