import React, { useMemo } from "react";
import "./Users.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ButtonItem from "./ButtonItem";
import { emojis } from "../config/emojis";
import { useSelector } from "react-redux";

import { ReactComponent as Add } from "../assets/add.svg";

const mainEmoji = emojis[Math.floor(Math.random() * emojis.length)];

const Users = () => {
  const navigate = useNavigate();
  const users = useSelector((s) => s.users.data);

  return (
    <section className="users">
      <Swiper
        className="users__all"
        spaceBetween={"5px"}
        breakpoints={{
          768: {
            spaceBetween: "10px",
          },
        }}
        slidesPerView={"auto"}
      >
        <SwiperSlide className="users__item">
          <button
            className="users__button"
            onClick={() => navigate("/?date=open")}
          >
            <Add className="users__add" />
          </button>
        </SwiperSlide>
        {users.map((item, index) => (
          <SwiperSlide className="users__item" key={index}>
            <ButtonItem active={item.active} index={index}>{item.emoji}</ButtonItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonItem>{mainEmoji}</ButtonItem>
    </section>
  );
};

export default Users;
