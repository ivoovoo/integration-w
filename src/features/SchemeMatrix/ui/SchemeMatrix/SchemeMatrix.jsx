import React from "react";
import Circle from "./Circle";
import Numbers from "../Number/Numbers";
import { classNames } from "../../../../shared/lib/classNames/classNames";

import { ReactComponent as Skeleton } from "../../assets/skeleton.svg";

import "./SchemeMatrix.css";

const SchemeMatrix = ({className}) => {
  return (
    <div className={classNames("scheme-matrix", [className])}>
      <Skeleton />
      <Circle>
        <div style={{ top: "-2.54%", left: "55.5%" }}>8</div>
        <div style={{ top: "-1.71%", left: "60%" }}>20</div>
        <div style={{ top: "-0.79%", left: "64.7%" }}>7</div>
        <div style={{ top: "0.50%", left: "68.9%" }}>14</div>
        <div style={{ top: "2.53%", left: "73%" }}>9</div>
        <div style={{ top: "4.93%", left: "77.3%" }}>22</div>
        <div style={{ top: "7.70%", left: "81.2%" }}>3</div>
        <div style={{ top: "15.9%", left: "90.6%" }}>8</div>
        <div style={{ top: "20%", left: "93.6%" }}>18</div>
        <div style={{ top: "24.4%", left: "96.5%" }}>10</div>
        <div style={{ top: "28.70%", left: "98.6%" }}>10</div>
        <div style={{ top: "33%", left: "100%" }}>22</div>
        <div style={{ top: "37.8%", left: "101.2%" }}>12</div>
        <div style={{ top: "42%", left: "102.2%" }}>14</div>
        <div style={{ bottom: "42.2%", left: "103.3%" }}>17</div>
        <div style={{ bottom: "38.2%", left: "102.1%" }}>15</div>
        <div style={{ bottom: "33.3%", left: "101%" }}>10</div>
        <div style={{ bottom: "29.2%", left: "99.4%" }}>13</div>
        <div style={{ bottom: "24.2%", left: "97%" }}>19</div>
        <div style={{ bottom: "20.7%", left: "94.2%" }}>6</div>
        <div style={{ bottom: "16.4%", left: "92%" }}>17</div>
        <div style={{ bottom: "7%", left: "83.6%" }}>15</div>
        <div style={{ bottom: "4.7%", left: "80%" }}>4</div>
        <div style={{ bottom: "2.2%", left: "75%" }}>6</div>
        <div style={{ bottom: "0%", left: "71.19%" }}>20</div>
        <div style={{ bottom: "-2%", left: "66.4%" }}>4</div>
        <div style={{ bottom: "-3.6%", left: "61.5%" }}>11</div>
        <div style={{ bottom: "-4%", left: "57%" }}>20</div>
        <div style={{ bottom: "-4%", left: "44.5%" }}>19</div>
        <div style={{ bottom: "-3.6%", left: "39.5%" }}>10</div>
        <div style={{ bottom: "-2%", left: "34.6%" }}>11</div>
        <div style={{ bottom: "-.5%", left: "30.4%" }}>19</div>
        <div style={{ bottom: "1.9%", left: "26.2%" }}>3</div>
        <div style={{ bottom: "3.7%", left: "21.8%" }}>11</div>
        <div style={{ bottom: "6.8%", left: "17.8%" }}>21</div>
        <div style={{ bottom: "15%", left: "8%" }}>4</div>
        <div style={{ bottom: "19%", left: "5%" }}>21</div>
        <div style={{ bottom: "23.5%", left: "2.7%" }}>5</div>
        <div style={{ bottom: "27.8%", left: ".3%" }}>11</div>
        <div style={{ bottom: "32%", left: "-1.5%" }}>14</div>
        <div style={{ bottom: "37%", left: "-2.8%" }}>3</div>
        <div style={{ bottom: "41.7%", left: "-3.2%" }}>22</div>
        <div style={{ top: "43.1%", left: "-3.4%" }}>10</div>
        <div style={{ top: "38.5%", left: "-2%" }}>9</div>
        <div style={{ top: "34.5%", left: "-1%" }}>17</div>
        <div style={{ top: "29.7%", left: "0%" }}>8</div>
        <div style={{ top: "25.5%", left: "2.6%" }}>5</div>
        <div style={{ top: "22%", left: "5.2%" }}>15</div>
        <div style={{ top: "17%", left: "8%" }}>22</div>
        <div style={{ top: "8.4%", left: "16.2%" }}>9</div>
        <div style={{ top: "5.5%", left: "20.4%" }}>20</div>
        <div style={{ top: "3%", left: "24.5%" }}>6</div>{" "}
        <div style={{ top: "1.3%", left: "28.5%" }}>13</div>
        <div style={{ top: ".1%", left: "33%" }}>5</div>{" "}
        <div style={{ top: "-1.20%", left: "38.3%" }}>19</div>{" "}
        <div style={{ top: "-2.64%", left: "43.90%" }}>7</div>
      </Circle>
      <Numbers />
    </div>
  );
};

export default SchemeMatrix;
