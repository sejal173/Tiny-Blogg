import { createRoot } from 'react-dom/client';
import "./index.css";
import { BroserRouter,Routes,Route } from 'react-dom';
import AllBlogs from './views/AllBlogs.jsx';
import NewBlog from './views/NewBlog.jsx';
import EditBlog from './views/EditBlog.jsx';
import ReadBlog from './views/ReadBlog.jsx';

createRoot(document.getElementById('root')).render(
    <BroserRouter>
      <Routes>
        <Route path="/" element={<AllBlogs/>}/>
        <Route path="/new" element={<NewBlogs/>}/>
        <Route path="/edit/:id" element={<EditBlogs/>}/>
        <Route path="/blog/:slug" element={<ReadBlogs/>}/>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </BroserRouter>
)
