import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title="コンタクト" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>お問合せ</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="なまえ"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="form-control"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="お問合せ内容"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                送信
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
