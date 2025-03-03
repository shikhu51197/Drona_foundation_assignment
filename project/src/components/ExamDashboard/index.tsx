'use client'

import React, { useState } from 'react'
import styles from './ExamDashboard.module.scss'

const ExamDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel')
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  
  const tabs = [
    { id: 'panel', label: 'Panel' },
    { id: 'timetable', label: 'Timetable' },
    { id: 'eligibility', label: 'Eligibility Checker' },
    { id: 'hallTicket', label: 'Hall Ticket' },
    { id: 'supervisors', label: 'Supervisors' },
    { id: 'paperPrint', label: 'Paper Print' },
    { id: 'signatureSheet', label: 'Signature Sheet' },
    { id: 'paperCheck', label: 'Paper Check' },
    { id: 'markEntry', label: 'Mark Entry' }
  ]
  
  const examCards = [
    {
      id: 1,
      status: 'Exam Conducted',
      statusColor: 'green',
      subjectCode: '410043181',
      title: 'Introduction to Functional English',
      date: '01-01-2023',
      attendance: {
        total: 58,
        present: 52,
        absent: 2
      },
      markStatus: '5 Student remain for mark attendance',
      examStatus: 'Good to Go!'
    },
    {
      id: 2,
      status: 'Exam Not Conducted',
      statusColor: 'red',
      subjectCode: '410043181',
      title: 'Introduction to Functional English',
      date: '01-01-2023',
      attendance: {
        total: 52,
        present: 52,
        absent: 0
      },
      markStatus: 'First mark exam as conducted',
      examStatus: ''
    },
    {
      id: 3,
      status: 'Exam Conducted',
      statusColor: 'green',
      subjectCode: '410043181',
      title: 'Introduction to Functional English',
      date: '01-01-2023',
      attendance: {
        total: 62,
        present: 57,
        absent: 5
      },
      markStatus: '',
      examStatus: 'Good to Go!'
    },
    {
      id: 4,
      status: 'Exam Conducted',
      statusColor: 'green',
      subjectCode: '410043181',
      title: 'Introduction to Functional English',
      date: '01-01-2023',
      attendance: {
        total: 57,
        present: 57,
        absent: 0
      },
      markStatus: '',
      examStatus: 'Good to Go!'
    }
  ]

  const toggleMenu = (cardId: number) => {
    if (activeMenu === `card-${cardId}`) {
      setActiveMenu(null)
    } else {
      setActiveMenu(`card-${cardId}`)
    }
  }

  return (
    <div className={styles.examDashboard}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Exam</h1>
          <div className={styles.breadcrumb}>
            <span>Exam</span> / <span>Dashboard</span> / <span>BMLMCA2_APR24&RVCDAPITAI&3&5</span>
          </div>
        </div>
        
        <div className={styles.actions}>
          <button className={styles.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button className={styles.createButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Create Exam
          </button>
          
          <button className={styles.historyButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            Exam History
          </button>
        </div>
      </div>
      
      <div className={styles.examInfo}>
        <div className={styles.universityInfo}>
          <div className={styles.logo}>
            <img src="https://via.placeholder.com/50" alt="University Logo" />
          </div>
          <div className={styles.details}>
            <h3>Bhagwan Mahavir University</h3>
            <p>Mid Term / CIA / Exam April - 2024</p>
            <p>Semester 1  |  Batch 2022-25</p>
          </div>
        </div>
        
        <div className={styles.courseInfo}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <div>
            <h4>Bachelor of Vocation</h4>
            <p>General Accounting, Taxation & Tally</p>
          </div>
        </div>
        
        <div className={styles.examActions}>
          <button className={styles.postponeButton}>Postpone</button>
          
          <div className={styles.examProgress}>
            <span>Pre exam task</span>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: '41%' }}></div>
            </div>
            <span>14 / 34</span>
          </div>
          
          <div className={styles.exportData}>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export Data
            </button>
          </div>
          
          <button className={styles.moreButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.id === 'panel' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              )}
              {tab.id === 'timetable' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              )}
              {tab.id === 'eligibility' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              )}
              {tab.id === 'hallTicket' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              )}
              {tab.id === 'supervisors' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              )}
              {tab.id === 'paperPrint' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
              )}
              {tab.id === 'signatureSheet' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              )}
              {tab.id === 'paperCheck' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <polyline points="9 15 12 18 15 15"></polyline>
                </svg>
              )}
              {tab.id === 'markEntry' && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              )}
              {tab.label}
            </button>
          ))}
          <button className={styles.nextButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div className={styles.tabContent}>
          <div className={styles.examCards}>
            {examCards.map(card => (
              <div key={card.id} className={styles.examCard}>
                <div className={styles.cardHeader}>
                  <div className={`${styles.status} ${styles[card.statusColor]}`}>
                    <span>{card.status}</span>
                    <span className={styles.statusCount}>{card.id}</span>
                  </div>
                  <button 
                    className={styles.cardMenu} 
                    onClick={() => toggleMenu(card.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                  
                  {activeMenu === `card-${card.id}` && (
                    <div className={styles.menuDropdown}>
                      {card.id === 2 ? (
                        <>
                          <button>Download Signature Sheet</button>
                          <button>Signature Sheet History</button>
                          <button>Signature Sheet Info</button>
                        </>
                      ) : (
                        <>
                          <button>Option 1</button>
                          <button>Option 2</button>
                          <button>Option 3</button>
                        </>
                      )}
                    </div>
                  )}
                </div>
                
                <div className={styles.cardBody}>
                  <div className={styles.subjectCode}>
                    <span>Subject Code: {card.subjectCode}</span>
                  </div>
                  
                  <h3 className={styles.subjectTitle}>{card.title}</h3>
                  
                  <div className={styles.examDate}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Exam Date: {card.date}</span>
                  </div>
                  
                  <div className={styles.attendanceSection}>
                    <div className={styles.attendanceHeader}>
                      <span className={styles.marked}>{card.id === 2 ? 'Not Marked' : 'Marked'}</span>
                      <span>Student Attendance</span>
                    </div>
                    
                    <div className={styles.attendanceStats}>
                      <div className={styles.statItem}>
                        <div className={styles.statLabel}>Total Students</div>
                        <div className={styles.statValue}>{card.attendance.total}</div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <div className={styles.statLabel}>Present Students</div>
                        <div className={styles.statValue}>{card.attendance.present}</div>
                      </div>
                      
                      <div className={styles.statItem}>
                        <div className={styles.statLabel}>Absent Students</div>
                        <div className={`${styles.statValue} ${card.attendance.absent > 0 ? styles.absentHighlight : ''}`}>
                          {card.id === 4 ? '00' : card.attendance.absent}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {card.markStatus && (
                    <div className={styles.markStatus}>
                      {card.markStatus}
                    </div>
                  )}
                  
                  {card.examStatus && (
                    <div className={styles.examStatus}>
                      {card.examStatus}
                    </div>
                  )}
                </div>
                
                <div className={styles.cardFooter}>
                  <button className={styles.actionButton}>
                    {card.id === 2 ? 'Mark Exam Conducted' : 'Mark / Edit Student\'s Attendance'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDashboard