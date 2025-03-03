'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import ExamDashboard from '@/components/ExamDashboard'
import styles from './page.module.scss'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <main className={styles.main}>
      <Sidebar isOpen={sidebarOpen} />
      <div className={styles.content}>
        <Header onMenuClick={toggleSidebar} />
        <ExamDashboard />
      </div>
    </main>
  )
}