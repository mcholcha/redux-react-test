/**
 * @author Mateusz Cholcha
 */

import React, {useMemo} from "react";
import "./Pagination.css";

function Pagination({page, pages, onChangePage}) {
  const canPrev = useMemo(() => (page > 1), [page])
  const canNext = useMemo(() => (page < pages), [page, pages])

  return (
    <React.Fragment>
      {
        (canPrev || canNext) && (
          <div className="pagination">
            <button
              className={`button pagination__button pagination__button--prev ${!canPrev ? 'is-disabled' : ''}`}
              type="button"
              onClick={() => onChangePage(page - 1)}
              disabled={!canPrev}
            >
              Prev page
            </button>

            <button
              className={`button pagination__button pagination__button--next ${!canNext ? 'is-disabled' : ''}`}
              type="button"
              onClick={() => onChangePage(page + 1)}
              disabled={!canNext}
            >
              Next page
            </button>
          </div>
        )
      }
    </React.Fragment>
  );
}

export default React.memo(Pagination);
