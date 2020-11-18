interface IUsers {
    traineeEmail: String;
    reviewerEmail: String;

}

type access = {
    all: String[];
    read: String[];
    write: String[];
    Delete: String[];
}

interface IPermissions {
    getUsers: access;
};

export { IUsers, IPermissions }