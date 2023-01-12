import React, { useState } from "react";
import "./assets/dropmenu.css";

export function Dropdown(){
const [status, setStatus] = useState(false);
  const [dropdownText, setDropdownText] = useState("");
  return (
    <>
      <div className="container">
        
        <div className="dropdown">
          <div
            onClick={() => {
              setStatus(!status);
            }}
            className="dropdown-button"
          >
            <span className="dropdown-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16.75C9 16.5511 9.07902 16.3603 9.21967 16.2197C9.36032 16.079 9.55109 16 9.75 16H14.25C14.4489 16 14.6397 16.079 14.7803 16.2197C14.921 16.3603 15 16.5511 15 16.75C15 16.9489 14.921 17.1397 14.7803 17.2803C14.6397 17.421 14.4489 17.5 14.25 17.5H9.75C9.55109 17.5 9.36032 17.421 9.21967 17.2803C9.07902 17.1397 9 16.9489 9 16.75ZM6 12.25C6 12.0511 6.07902 11.8603 6.21967 11.7197C6.36032 11.579 6.55109 11.5 6.75 11.5H17.25C17.4489 11.5 17.6397 11.579 17.7803 11.7197C17.921 11.8603 18 12.0511 18 12.25C18 12.4489 17.921 12.6397 17.7803 12.7803C17.6397 12.921 17.4489 13 17.25 13H6.75C6.55109 13 6.36032 12.921 6.21967 12.7803C6.07902 12.6397 6 12.4489 6 12.25ZM3 7.75C3 7.55109 3.07902 7.36032 3.21967 7.21967C3.36032 7.07902 3.55109 7 3.75 7H20.25C20.4489 7 20.6397 7.07902 20.7803 7.21967C20.921 7.36032 21 7.55109 21 7.75C21 7.94891 20.921 8.13968 20.7803 8.28033C20.6397 8.42098 20.4489 8.5 20.25 8.5H3.75C3.55109 8.5 3.36032 8.42098 3.21967 8.28033C3.07902 8.13968 3 7.94891 3 7.75Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>{dropdownText}</span>
          </div>
          {status && (
            <div className="dropdown-menu-list">
              <div
                onClick={() => {
                  setDropdownText("");
                  setStatus(!status);
                }}
                className="dropdown-menu-item"
              >
               Editer Profil
              </div>
              <div
                onClick={() => {
                  setDropdownText("");
                  setStatus(!status);
                }}
                className="dropdown-menu-item"
              >
                Highest Price
              </div>
              <div
                onClick={() => {
                  setDropdownText("");
                  setStatus(!status);
                }}
                className="dropdown-menu-item"
              >
                Lowest Price
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
