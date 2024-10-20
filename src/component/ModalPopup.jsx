


import { Button, Modal,Label, TextInput,Textarea, Select } from "flowbite-react";


export function ModalPopup({onOpen, onClose}) {

  return ( 
    <>
      <Modal show={onOpen} onClose={() => onClose(false)}>
        <Modal.Header>Add Task</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form action="" className=" flex flex-wrap">
              <div className=" w-full">
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput id="title" type="text" required />
              </div>
              <div className=" w-full mt-2">
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea id="description" required rows={4} />
              </div>
              <div className=" w-2/3 mt-2 pr-3">
                <div className="mb-2 block">
                  <Label htmlFor="select" value="Assigned To" />
                </div>
                <Select id="select" required>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </Select>
              </div>
              <div className=" mt-2 w-1/3">
                <div className="mb-2 block">
                  <Label htmlFor="select" value="Priority" />
                </div>
                <Select id="select" required>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                  <option>Four</option>
                </Select>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
