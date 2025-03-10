import React from "react";
import "./Users.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import ButtonItem from "./ButtonItem";

import main_user from "../assets/main-user.png";
import add from "../assets/add.svg";
import { emojis } from "../config/emojis";

const config = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
].map((item) => {
  item.emoji = emojis[Math.floor(Math.random() * emojis.length)];
  return item;
});

const Users = () => {
  const navigate = useNavigate();

  return (
    <section className="users">
      <Swiper
        className="users__all"
        spaceBetween={"10px"}
        slidesPerView={"auto"}
      >
        {config.map(({ emoji }, index) => {
          if (index == 0) {
            return (
              <SwiperSlide className="users__item" key={index}>
                <ButtonItem active={true}>{emoji}</ButtonItem>
              </SwiperSlide>
            );
          }
          return (
            <SwiperSlide className="users__item" key={index}>
              <ButtonItem>{emoji}</ButtonItem>
            </SwiperSlide>
          );
        })}

        <SwiperSlide className="users__item">
          <button
            className="users__button"
            onClick={() => navigate("/?date=open")}
          >
            <img className="users__add" src={add} />
          </button>
        </SwiperSlide>
      </Swiper>
      <button className="users__main">
        <img className="users__photo" src={main_user} />
      </button>
    </section>
  );
};

export default Users;
