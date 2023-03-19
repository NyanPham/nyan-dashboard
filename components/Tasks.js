import React from 'react'
import Layout from './Layout'
import Content from './Main/Content'
import Header from './Main/Header'
import Heading from './Main/Heading'

const Tasks = () => {
    return (
        <Layout>
            <Header title="Remaining Tasks" />
            <Heading
                title="Active Tasks"
                description="You can edit all the stuff as you wish"
            />
            <Content />
        </Layout>
    )
}

export default Tasks
