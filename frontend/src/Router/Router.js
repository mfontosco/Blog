import {Routes,Route, Navigate} from 'react-router-dom'
import Layout from '../components/Post/Posts/Layout/Layout'
import {CreateCategoryScreen,UpdateBlogScreen,LoginScreen,RegisterScreen,AllBlogScreen,SingleBlogScreen,HomeScreen,NotFoundScreen,PostFormScreen
} from './Index'

const Router = ()=>{
    return <Routes>
        <Route path='/'  element={<Layout><HomeScreen/></Layout>}/>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/blogs' element={<Layout><AllBlogScreen/></Layout>}/>
        <Route path='/blog/:id' element={<SingleBlogScreen/>} />
        <Route path='/blog/:id/edit' element={<UpdateBlogScreen/>} />
        <Route path='/notfound' element={<NotFoundScreen/>}/>
        <Route path='/createBlog' element={<PostFormScreen/>}/>
        <Route path='createCategory' element={<Layout><CreateCategoryScreen/></Layout>}/>

        <Route path='*' element={<Navigate to='/notfound'/>}/>
    </Routes>
}

export default Router