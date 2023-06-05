import './AllProjects.scss';
import '../Global.scss';
import {projectItems} from './constants';
import Tag from './Tag'

export default function AllProjects(){
    projectItems.sort((a,b) => (a.year < b.year) ? 1 : -1);
    return (
        <div>
            <h1 className='header'>All Projects</h1>
            <a className='return' href='/'>← Return to main page</a>
            <table className='allProjects'>
                <tr className='table-header'>
                    <th>Year</th>
                    <th>Project</th>
                    <th>Built With</th>
                    <th>Github</th>
                    <th>Link</th>
                </tr>
                {projectItems.map(projectItem => {
                    return <tr className='project'>
                                <td>{projectItem.year}</td>
                                <td className='project-title'>{projectItem.title}</td>
                                <td>
                                    {
                                        projectItem.tags.map(tag => {
                                            return <Tag text={tag}/>
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        projectItem.github ?
                                        <a href={projectItem.github} target='_blank' rel="noreferrer">github</a>
                                        : <></>
                                    }
                                </td>
                                <td>{
                                        projectItem.link ?
                                        <a href={projectItem.link} target='_blank' rel="noreferrer">link</a>
                                        : <></>
                                    }
                                </td>
                            </tr>
                    })
                }
            </table>
        </div>
    )
}