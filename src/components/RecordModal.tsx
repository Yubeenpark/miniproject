import style from "./RecordModal.module.scss";
import { X } from "lucide-react";
import React from "react";

type RecordModalProps = {
  day: number;
  month: number;
  year: number;
  closeModal: () => void;
};

export function RecordModal({
  year,
  month,
  day,
  closeModal,
}: RecordModalProps) {
  console.log("모달 오픈 ", day);
  return (
    <div className={style.modalContainer}>
      <div className={style.dateTitle}>
        <text className={style.dateTitleText}>
          {year} {month} {day}
        </text>
      </div>
      <div className={style.diaryTitle}>하이</div>
      <div className={style.diaryDescription}>
        <text className={style.diaryDescriptionText}>ㅋㅋ</text>
      </div>
      <button className={style.exitButton} onClick={closeModal}>
        <X className={style.exitButton} />
      </button>
    </div>
  );
}
