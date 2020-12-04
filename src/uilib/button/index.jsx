import React, { Fragment } from 'react';
import './style.scss';

export default function index({ onClick, label, color = 'blue' }) {
  return (
    <button
      className={`btn btn-primary custom-btn btn-col-${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
