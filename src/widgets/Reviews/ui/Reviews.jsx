import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Item from "./Item";
import Top from "./Top";

import "./Reviews.css";
import "swiper/css";
import "swiper/css/pagination";

const Reviews = () => {
  const swiperRef = useRef();

  const prevSlide = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);
  const nextSlide = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  return (
    <section className="reviews">
      <div className="container">
        <Top
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          swiperRef={swiperRef}
        />
        <Swiper
          className="reviews__swiper"
          spaceBetween={20}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          ref={swiperRef}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="reviews__slide">
              <Item name="Юлия К." date="5 января 2024">
                Волшебная Матрица помогла мне изменить мышление и найти новые
                возможности!
              </Item>
              <Item name="Дарья Н." date="18 февраля 2023">
                Это удивительный опыт, который дал мне энергию и мотивацию для
                движения вперед.
              </Item>
              <Item name="Алина В." date="10 марта 2022">
                В Матрице я нашла ответы на давно мучившие меня вопросы. Это
                невероятно!
              </Item>
              <Item name="Артем С." date="25 апреля 2024">
                Никогда не думал, что один курс может так сильно повлиять на мою
                жизнь.
              </Item>
              <Item name="Максим Л." date="7 мая 2021">
                После участия в программе я понял, что способен на гораздо
                большее.
              </Item>
              <Item name="Екатерина М." date="30 июня 2023">
                Благодарю за новые знания и поддержку! Это был бесценный опыт.
              </Item>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="reviews__slide">
              <Item name="Иван Т." date="14 июля 2022">
                Этот опыт полностью перевернул мое представление о мире!
              </Item>
              <Item name="Мария Г." date="3 августа 2024">
                Огромная благодарность за возможность раскрыть свой потенциал!
              </Item>
              <Item name="Сергей П." date="22 сентября 2023">
                Рекомендую каждому! Это действительно меняет жизнь.
              </Item>
              <Item name="Ольга Д." date="9 октября 2021">
                Теперь я смотрю на жизнь совершенно иначе, спасибо!
              </Item>
              <Item name="Анна В." date="17 ноября 2022">
                Никогда не думала, что смогу добиться такого результата.
              </Item>
              <Item name="Владимир К." date="5 декабря 2020">
                Этот курс — лучшее, что со мной случалось за последние годы!
              </Item>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="reviews__slide">
              <Item name="Елена С." date="21 января 2023">
                Чувствую себя совершенно по-новому! Спасибо огромное!
              </Item>
              <Item name="Дмитрий Р." date="8 февраля 2021">
                Уникальный подход, который действительно работает!
              </Item>
              <Item name="Алексей Б." date="15 марта 2024">
                Теперь у меня есть четкое понимание своего пути.
              </Item>
              <Item name="Виктория Л." date="4 апреля 2022">
                Огромное спасибо за вдохновение и поддержку!
              </Item>
              <Item name="Константин М." date="27 мая 2020">
                Это был лучший опыт саморазвития в моей жизни!
              </Item>
              <Item name="Татьяна Ф." date="12 июня 2023">
                Рекомендую всем, кто хочет найти смысл и гармонию.
              </Item>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
