import React, { useState } from "react";
import "./App.css";
import "/public/css/dropdown.css";
import "/public/css/fonts.css";
import "/public/css/header.css";
import "/public/css/index.css";
import "/public/css/modal.css";
import "/public/css/tasks.css";

function App() {
  const [modalScreen, setModalScreen] = useState(false);
  const [inputNewTask, setInputNewTask] = useState("");
  const [textNewTask, setTextNewTask] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [task, setTask] = useState([]);
  function newTask() {
    setModalScreen(true);
  }
  function closeModal() {
    setModalScreen(false);
    setInputNewTask("");
    setTextNewTask("");
    setCheckbox(false);
  }
  function createTask() {
    if (inputNewTask !== "" && textNewTask !== "") {
      const newTask = {
        id: Date.now(),
        title: inputNewTask,
        description: textNewTask,
        isImportant: checkbox,
      };
      setTask([...task, newTask]);
      closeModal();
    } else {
      alert("لطفا تمامی فیلدها را تکمیل نمایید.");
    }
  }
  return (
    <>
      <header id="header">
        <div id="navbar">
          <a className="nav-item" href="#">
            {" "}
            خانه{" "}
          </a>
          <a className="nav-item" href="https://sabzlearn.com">
            {" "}
            دوره های سبزلرن{" "}
          </a>
          <a className="nav-item" href="#">
            {" "}
            اشتراک ویژه{" "}
          </a>
          <a className="nav-item" href="#">
            {" "}
            درباره ما{" "}
          </a>
          <a className="nav-item" href="#">
            {" "}
            تماس با ما{" "}
          </a>
        </div>
        <div>
          <a href="https://sabzlearn.ir">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 left-0 mx-auto md:static h-10 md:h-10 lg:h-10 shrink-0"
              viewBox="0 0 1020 769"
            >
              <polygon
                fill="#006537"
                points="484.8124 560.0603 302.0609 655.3444 238.4124 617.2945 238.4124 462.4662 484.8124 560.0603"
              />
              <polygon
                fill="#006869"
                points="972.5712 207.8379 484.6647 462.7753 10.7595 275.1003 498.7369 20.1923 972.5712 207.8379"
              />
              <line
                fill="#1a3d3d"
                x1="929.7475"
                y1="307.461"
                x2="929.6513"
                y2="307.6423"
              />
              <polygon
                fill="#006869"
                points="1010.2748 576.281 951.4402 632.8758 896.4012 572.396 934.1612 536.0524 934.0697 227.9393 972.5606 207.8255 972.3776 534.6349 1010.2748 576.281"
              />
              <polygon
                fill="#00524c"
                points="972.5669 246.8789 972.5027 335.57 934.0989 357.7689 934.0747 266.9936 972.5669 246.8789"
              />
              <polygon
                fill="#004b26"
                points="478.5395 760.6504 238.4571 617.3325 238.4571 604.062 484.6701 560.0356 489.1606 570.333 478.5395 760.6504"
              />
              <polygon
                fill="#00524c"
                points="585.898 409.8693 484.472 463.0223 10.7549 275.1038 498.7374 20.1923 585.898 409.8693"
              />
              <polygon
                fill="#00322d"
                points="972.5669 207.8394 972.5027 255.9601 934.0989 300.7406 934.0747 227.9542 972.5669 207.8394"
              />
              <polygon
                fill="#1eb35b"
                points="816.6519 386.7124 816.6519 527.0091 478.1841 760.5632 302.0575 655.3487 816.6519 386.7124"
              />
            </svg>
          </a>
        </div>
      </header>
      <main className="container pb-25">
        {/* Headline */}
        <div id="headline" className="space-y-3">
          <h1 className="title">
            <img src="./public/images/hourglass.png" className="size-8" />
            <span> مدیریت و برنامه ریزی </span>
          </h1>
          <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
            سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
            پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
            پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
          </p>
        </div>
        {/* Headline Buttons */}
        <div className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between">
          <div />
          <div className="flex items-center gap-2">
            <div className="dropdown">
              <input id="dd-toggle" type="checkbox" hidden="" />
              <label className="dd-btn" htmlFor="dd-toggle">
                <span>نمایش فقط</span>
                <i className="fa-solid fa-chevron-down" />
              </label>
              <div className="dropdown_menu" role="menu">
                <div className="dropdown-label">
                  <p className="text-start text-xs opacity-60">نمایش فقط</p>
                </div>
                <div className="py-1">
                  <label htmlFor="dd-toggle" className="menu-item">
                    همه
                  </label>
                  <label htmlFor="dd-toggle" className="menu-item">
                    تکمیل شده ها
                  </label>
                  <label htmlFor="dd-toggle" className="menu-item">
                    در انتظار انجام
                  </label>
                </div>
              </div>
            </div>
            <button id="open-dialog" className="" onClick={newTask}>
              <span> ایجاد جدید </span>
              <div className="btn-divider" />
              <span>
                <i className="fa-solid fa-plus" />
              </span>
            </button>
          </div>
        </div>
        <section id="tasks" className="space-y-30 mt-5">
          <div className="space-y-5">
            <p className="text-sm">تسک های موجود:</p>
            <div className="space-y-0.5">
              {task.map((item) => (
                <article className="task-card" key={item.id}>
                  <div className="task-content">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="task-desc">{item.description}</p>
                    </div>
                  </div>
                  <div className="moderate">
                    {/* Status & Priority */}
                    <div className="flex items-center **:min-w-max gap-2">
                      <span className="status-label completed">
                        {" "}
                        تکمیل شده{" "}
                      </span>
                      {item.isImportant && (
                        <span className="priority code-1"> مهم </span>
                      )}
                    </div>
                    <div className="moderate-btns">
                      <button className="complete-task">
                        <i className="fa-solid fa-circle-check" />
                      </button>
                      <button className="undone-btn">
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-sm">تسک‌های تکمیل‌شده</p>
            <div className="space-y-0.5">
              {/* done completed */}
              <article className="task-card done completed">
                <div className="task-content">
                  <div>
                    <h3>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    </h3>
                    <p className="task-desc">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {/* Status & Priority */}
                  <div className="flex items-center **:min-w-max gap-2">
                    <span className="status-label completed"> تکمیل شده </span>
                    <span className="priority code-1"> مهم </span>
                  </div>
                  <div>
                    <div className="dropdown group">
                      <button className="opener">
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </button>
                      <div className="menu absolute">
                        <button className="complete">
                          <i className="fa-solid fa-check-double" />
                          تکمیل شده
                        </button>
                        <button className="doing">
                          <i className="fa-solid fa-spinner" /> درحال انجام
                        </button>
                        <button className="waiting">
                          <i className="fa-solid fa-info" /> در انتظار
                        </button>
                        <button className="cancel">
                          <i className="fa-solid fa-circle-stop" />
                          متوقف کردن
                        </button>
                        <button className="trash">
                          <i className="fa-solid fa-trash" />
                          حذف کردن
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      {/* Create Modal Screen */}
      {/*  className: is-hidden */}
      <div
        id="modal-screen"
        className={modalScreen ? "modal-screen" : "is-hidden"}
      >
        <div className="modal-content">
          <header className="modal-header">
            <span className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!">
              ایجاد برنامه جدید
            </span>
            <div className="btns *:size-3.5 *:cursor-pointer *:rounded-full">
              <button id="modal-close-button" className="" />
            </div>
          </header>
          <main className="my-5 space-y-3">
            <input
              placeholder="عنوان تسک را وارد نمائید ..."
              className="input-element title-input"
              value={inputNewTask}
              onChange={(e) => setInputNewTask(e.target.value)}
            />
            <textarea
              className="input-element description-input"
              placeholder="توضیحات تسک را وارد نمائید ..."
              name="description"
              value={textNewTask}
              onChange={(e) => setTextNewTask(e.target.value)}
            />
            <div className="my-3 flex items-center gap-2">
              <input
                id="is-important"
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
              />
              <label htmlFor="is-important"> مهم </label>
            </div>
            <div className="info-message">
              <p className="inline-flex! items-center gap-1">
                <img
                  src="./public/images/check.png"
                  alt="Checked"
                  className="size-4"
                />
                <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
              </p>
            </div>
          </main>
          <footer className="mt-5 flex items-center justify-end text-sm pb-3">
            <button id="create-button" onClick={createTask}>
              ایجاد کنید
            </button>
          </footer>
        </div>
      </div>
      <footer className="static text-sm text-zinc-600 left-0 right-0 text-center bottom-0">
        توسعه داده شده با 💚 در
        <a href="https://sabzlearn.ir" className="text-green-600">
          سبزلرن
        </a>
      </footer>
    </>
  );
}

export default App;
