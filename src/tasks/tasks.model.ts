export interface Task{
    id : string,
    title :string,
    description: string
    status: Taskstatus
}
export enum Taskstatus
{
    OPEN= "open",
    DONE= "done",
    IN_PROGRESS="in_progress",


}