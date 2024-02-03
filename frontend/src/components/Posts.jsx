import React from 'react'

export default function Posts() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-10 col-12 flex">
          <img src="error.png" alt="Img" />
        </div>
        <div class="col-lg-6 col-md-5 right mt-2 col-12 mb-3">
          <h2 className='text-warning'>Heading</h2>
          <div class="flex">
            <div class="time">Time and Date</div>
            <div class="name">Name of Author</div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod explicabo repellendus officiis
            provident hic! Eum doloremque veniam natus sed. Officiis impedit tenetur laboriosam quam numquam at,
            placeat recusandae accusamus quod hic fugit similique quia obcaecati ab dolore? Dicta illo aut
            placeat eaque pariatur vero harum quidem minima repellat dolor?</p>
        </div>
      </div>
      <style>
        {`
        img {
          max - height: 300px;
        width:70%;
        }

        .name {
          font-style: italic;
        font-weight: bolder;
        color: coral
    }

        .time {
          color: gray;
        color: coral
    }

        .flex {
          display: flex;
        justify-content: space-between;
        align-items: center;
    }

        h2,
        p {
          color:white;
          margin: 7px 0;
    }
    p{
      font-size: 17px;
      font-weight: 400;
    }

        .right {
          padding: 15px;
    }

        
        @media only screen and (max-width: 600px) {
          img {
          width: 100%;
        }
        .left{
          text - align: center;
        }
        h2{
          font - size: 25px;
        }
        p{
          font - size: 20px;
        }
      }

        @media only screen and (max-width: 992px) {
          img{
          width: 100%;
        }
      `}

      </style>
    </div>
  )
}
