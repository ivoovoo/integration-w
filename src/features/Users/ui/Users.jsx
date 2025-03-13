import React, { useMemo } from "react";
import "./Users.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ButtonItem from "./ButtonItem";

import {ReactComponent as Add} from "../assets/add.svg";
import { emojis } from "../config/emojis";
import { useSelector } from "react-redux";

const mainEmoji = emojis[Math.floor(Math.random() * emojis.length)];

const Users = () => {
  const navigate = useNavigate();
  const users = useSelector((s) => s.users);

  console.log(users);
  return (
    <section className="users">
      <Swiper
        className="users__all"
        spaceBetween={"5px"}
        breakpoints={{
          768: {
            spaceBetween:'10px'
          }
        }}
        slidesPerView={"auto"}
      >
        <SwiperSlide className="users__item">
          <button
            className="users__button"
            onClick={() => navigate("/?date=open")}
          >
            <Add className='users__add' />
          </button>
        </SwiperSlide>
        {users.map((item, index) => {
          if (index == 0) {
            return (
              <SwiperSlide className="users__item" key={index}>
                <ButtonItem active={true}>{item}</ButtonItem>
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide className="users__item" key={index}>
              <ButtonItem>{item}</ButtonItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="users__main">
        <ButtonItem>{mainEmoji}</ButtonItem>
      </button>
    </section>
  );
};

export default Users;
