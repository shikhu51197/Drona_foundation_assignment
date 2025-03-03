import React, { useState } from "react";
import styles from "./model.module.scss";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [examName, setExamName] = useState<string>("");
  const [examDate, setExamDate] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [specialization, setSpecialization] = useState<string>("");
  const [enrollmentNumber, setEnrollmentNumber] = useState<string>("");
  const [subjectCode, setSubjectCode] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      examName,
      examDate,
      subject,
      specialization,
      enrollmentNumber,
      subjectCode,
    });
    onClose(); // Close the modal after submission
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Add Exam Details</h2>

        {/* Exam Details Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Exam Name:
            <input
              type="text"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              required
            />
          </label>

          <label>
            Exam Date:
            <input
              type="date"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              required
            />
          </label>

          <label>
            Select Subject:
            <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
              <option value="">Select a subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
            </select>
          </label>

          <label>
            Specialization:
            <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} required>
              <option value="">Select Specialization</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">Electrical Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
            </select>
          </label>

          <label>
            Enrollment Number:
            <input
              type="text"
              value={enrollmentNumber}
              onChange={(e) => setEnrollmentNumber(e.target.value)}
              required
            />
          </label>

          <label>
            Subject Code:
            <input
              type="text"
              value={subjectCode}
              onChange={(e) => setSubjectCode(e.target.value)}
              required
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
