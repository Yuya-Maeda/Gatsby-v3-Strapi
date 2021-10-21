import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="お探しのページは見つかりません。" />
      <main className="error-page">
        <div className="error-container">
          <h1>お探しのページは見つかりません </h1>
          <Link to="/" className="btn">
            ホーム画面に戻る
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
