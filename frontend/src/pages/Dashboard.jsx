import React, { useContext, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { UserContext } from '../context/UserContext';
import { dashboardStyles as styles } from '../assets/dummystyle';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [openCreateModal,setOpenCreateModal]=useState(false)
    const [allResumes,setAllResumes] = useState([]);

  return (
    <DashboardLayout>
        <div className={styles.container}>
            <div className={styles.headerWrapper}>
                <div>
                    <h1 className={styles.headerTitle}>My Resume</h1>
                    <p className={styles.headerSubtitle}>
                        {allResumes.length>0?`You have ${allResumes.length} resumes${allResumes.length !==1?'s':" "}`:
                        'Start building your professionsl resumes'
                         }
                    </p>
                </div>
            </div>
        </div>
    </DashboardLayout>
  )
}

export default Dashboard