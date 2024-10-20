import Container from "../../component/Container";
import { Button} from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from "./TaskItem";
import TaskTableHeader from "./TaskTableHeader";
import { useState } from "react";
import { ModalPopup } from "../../component/ModalPopup";

function NoData () {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className=" text-center">No Data Found</Table.Cell>
        </Table.Row>
    )
}

function TaskTable() {

    let [openModal, setOpenModal] = useState (false);

  return (
    <Container className=" mt-8">
        <div className="flex justify-end w-full">
            <Button onClick={() => setOpenModal(true)} className="mr-2" color="failure">Add Task</Button>
            <Button color="success">Clear Task</Button>
        </div>

        <div className="p-3  my-3 rounded-sm border dark:border-[#666]">
            <TaskTableHeader />
            <div className="overflow-x-auto mt-6">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>#</Table.HeadCell>
                        <Table.HeadCell>Title</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Assigned</Table.HeadCell>
                        <Table.HeadCell>Priority</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <TaskItem />
                        <NoData />
                    </Table.Body>
                </Table>
            </div>
        </div>
        <ModalPopup onOpen={openModal} onClose={() => setOpenModal(false)}  />
    </Container>
  )
}

export default TaskTable 