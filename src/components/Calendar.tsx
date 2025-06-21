import myImage from "../assets/image.png";
import styles from "./Calendar.module.scss";
import { RecordModal } from "./RecordModal";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";

// Assuming you have a logo image
// Assuming you have a RecordModal component

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Calendar() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="empty-day"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div
        key={`day-${i}`}
        className={styles.day}
        onClick={() => {
          setModalOpen(true);
          setSelectedDay(i);
        }}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={styles.calendarContainer}>
      {modalOpen &&
        selectedDay !== null &&
        createPortal(
          <RecordModal
            day={selectedDay}
            year={Number(year)}
            month={month + 1} // month is 0-indexed, so we add 1 for display
            closeModal={() => setModalOpen(false)}
          />,
          document.body
        )}
      <div className={styles.calendarTopBar}>
        <div className={styles.calendarHeader}>
          <div className={styles.logoContainer}>
            <img className={styles.brandLogoImage} src={myImage} />
            <div className={styles.brandLogo}>MemoryShare</div>
          </div>

          <div className={styles.calendarHandler}>
            <ChevronLeft
              className={styles.buttonStyle}
              color="#530a0a"
              onClick={handlePrevMonth}
            />
            <div className={styles.yearMonthStyle}>
              {year} {month < 9 ? `0${month + 1}` : `${month + 1}`}
            </div>

            <ChevronRight
              className={styles.buttonStyle}
              color="#979797"
              onClick={handleNextMonth}
            />
          </div>
        </div>

        <div>김 아무개. </div>
        <div>기록</div>
        <div className={styles.memoryButtonContainer}>
          <button className={styles.memoryButton}>
            <Plus className={styles.plusButton}></Plus>
            <text className={styles.memoryButtonText}>Add memory</text>
          </button>
        </div>
      </div>

      <div className={styles.calendarMainContainer}>
        <div className={styles.friendListContainer}>
          <div>Friends</div>
          <div>
            <div className={styles.friendContainer}>
              <div className={styles.profileImageContainer}>
                <div className={styles.profileImage}></div>
              </div>

              <div className={styles.friendInfo}>
                <text className={styles.friendName}>김아무개</text>
                <div>progressBar</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.calendarGridContainer}>
          <div className={styles.daysOfWeek}>
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className={styles.calendarGrid}>{days}</div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
