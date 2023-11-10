import {lazy, FC, Suspense, useEffect} from 'react'
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import {UserManage} from '../pages/UserManagement'
import {getToken} from '../../apis/Auth'
import Profile from '../pages/Profile'
import {apiGet} from '../../apis/ApiRequest'
import {ApiEndpoints} from '../../apis/ApiEndpoints'
import {useDispatch} from 'react-redux'
import {getProfile, setUserData} from '../../store/userSlice'
import ContentManagement from '../pages/ContentManagement'
import CategoryManagement from '../pages/CategoryManagement'
import CommissionManagement from '../pages/CommisionManagement'
import AdsManagement from '../pages/AdsManagement'
import PaymentLog from '../pages/PaymentLog'
import UserDetail from '../pages/UserManagement/UserDetail'
import {pathLocations} from '../../utils/pathLocations'
import CategoryDetail from '../pages/CategoryManagement/CategoryDetail'
import ContentDetail from '../pages/ContentManagement/ContentDetail'
import ManageFeedback from '../pages/ManageFeedback'
import FeedbackDetail from '../pages/ManageFeedback/FeedbackDetail'
import SubscriptionManage from '../pages/SubscriptionManage'
import AddSubscriber from '../pages/AddSubscriber'
import SubscriptionDetails from '../pages/SubscriptionManage/subscriptionDetails'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    const token = getToken()
    // if (token == null || token == '') {
    //   navigate('/auth')
    // }

    dispatch(getProfile())
  }, [])

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to={pathLocations.dashboard } />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        {/* <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        /> */}
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='/profile'
          element={
            <SuspensedView>
              <Profile />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.userManagement}`}
          element={
            <SuspensedView>
              <UserManage />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.userManagement}/:id`}
          element={
            <SuspensedView>
              <UserDetail />
            </SuspensedView>
          }
        />

           {/* set  */}

        <Route
          path={`${pathLocations.subscriptionManage}`}
          element={
            <SuspensedView>
              <SubscriptionManage />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.addsubscriber}`}
          element={
            <SuspensedView>
              <AddSubscriber />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.subscriptionManage}/:id`}
          element={
            <SuspensedView>
              <SubscriptionDetails />
            </SuspensedView>
          }
        />

        <Route
          path={`${pathLocations.contentManagement}`}
          element={
            <SuspensedView>
              <ContentManagement />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.contentManagement}/:id`}
          element={
            <SuspensedView>
              <ContentDetail />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.categoryManagement}`}
          element={
            <SuspensedView>
              <CategoryManagement />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.categoryManagement}/:id`}
          element={
            <SuspensedView>
              <CategoryDetail />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.commisionManagement}`}
          element={
            <SuspensedView>
              <CommissionManagement />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.adsManagement}`}
          element={
            <SuspensedView>
              <AdsManagement />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.paymentLogs}`}
          element={
            <SuspensedView>
              <PaymentLog />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.manageFeedback}`}
          element={
            <SuspensedView>
              <ManageFeedback />
            </SuspensedView>
          }
        />
        <Route
          path={`${pathLocations.manageFeedback}/:id`}
          element={
            <SuspensedView>
              <FeedbackDetail />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      0: baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
