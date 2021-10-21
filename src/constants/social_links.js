import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
  FaLine,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://instagram.com",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://youtube.com",
  },
  {
    id: 5,
    icon: <FaLine className="social-icon"></FaLine>,
    url: "https://line.me",
  },
]

export default data
