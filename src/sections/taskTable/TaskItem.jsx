import { Table } from "flowbite-react";

function TaskItem() {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell>01</Table.Cell>
        <Table.Cell>API Build</Table.Cell>
        <Table.Cell>Take a copy of api links from wevsite then use.</Table.Cell>
        <Table.Cell>Toslim Uddin</Table.Cell>
        <Table.Cell>High</Table.Cell>
        <Table.Cell>
            <a href="#" className=" mr-2 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
            </a>
            <a href="#" className="font-medium text-rose-600 hover:underline dark:text-rose-500">
                Delete
            </a>
        </Table.Cell>
    </Table.Row>
  )
}

export default TaskItem