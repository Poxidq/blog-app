import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Menu from '../components/Menu'

// Media imports
import Edit from "../media/edit_icon.png";
import Delete from "../media/delete_icon.svg";

// Styles
import { SingleComponent, SingleContentComponent, SingleEditComponent, SingleInfoComponent, SingleUserComponent } from '../styles/single';

export default function Single() {
  return (
    <SingleComponent>
      <SingleContentComponent>
        <img src="https://media.tenor.com/r_o5CDFmws8AAAAC/k-on-anime.gif" alt="" />
        <SingleUserComponent>
          <img
            src="https://media.tenor.com/5WjGQ_D8yL0AAAAC/blink-tokyo-ghoul.gif"
            alt=""
          />
          <SingleInfoComponent>
            <span>post.username</span>
            <p>Posted now</p>
          </SingleInfoComponent>
          {/* {currentUser.username === post.username && ( */}
          <SingleEditComponent>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </SingleEditComponent>
          {/* )} */}
        </SingleUserComponent>
        <h1>post.title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!
          `
        </p>
      </SingleContentComponent>
      <Menu />
    </SingleComponent>
  )
}
