import React from "react"
import { FaReact } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"
import { SiStrapi } from "react-icons/si"
const services = [
  {
    id: 1,
    icon: <FaReact className="service-icon" />,
    title: "React JS",
    text: `React (リアクト) は、Facebookとコミュニティによって開発されているJavaScriptライブラリです。JavaScriptによるページ生成を行うことにより、高速なページ転移ができます。`,
  },
  {
    id: 2,
    icon: <GrGatsbyjs className="service-icon" />,
    title: "Gatsby JS",
    text: `Gatsby（ギャッツビー）はReactJSのフレームワークで、Gatsby.jsを使うと画像の処理などを最適化した高速ウェブサイトの生成ができます。またSEOにも強いサイトが作れます。`,
  },
  {
    id: 3,
    icon: <SiStrapi className="service-icon" />,
    title: "Strapi ",
    text: `StrapiとはヘッドレスCMSサイト向けのオープンソースのCMSです。GraphQLにも対応し、高速な読み込みを実現できます。フロントとコンテンツを分離することにより、簡単にウェブサイトの中身の更新が行えます`,
  },
]

export default services
