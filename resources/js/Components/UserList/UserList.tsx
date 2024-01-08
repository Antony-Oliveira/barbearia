import { User } from '@/types'
import { Box, Button, IconButton, Table, TableCaption, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import { Link, Head } from '@inertiajs/react'
import { TbNews } from "react-icons/tb";
import React, { useState } from 'react'
import Search from '../Search/Search';
interface UserListProps {
    users: User[];
}

const UserList = ({ users, onUserSelect }: UserListProps) => {
    const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });
    const [filteredUsers, setFilteredUsers] = useState(users.data);

    const Pagination = () => {
        return (
            <div className="flex flex-wrap -mb-1">
                {users.links.map((link, key) => (
                    <React.Fragment key={key}>
                        {link.url === null ? (
                            <div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" />
                        ) : (
                            <Link
                                href={link.url}
                                className={`mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ${link.active ? 'bg-blue-700 text-white' : ''}`}
                            >
                                {link.label}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </div>
        )
    }

    return (
        <>
            <Search users={users.data} onSearch={(u) => setFilteredUsers(u)}/>
            <Box p={0}>
                <Table variant={'striped'} size={tableSize}>
                    <TableCaption>
                        Página {users.current_page} <br />
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Contato</Th>
                            <Th>Agendar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredUsers.map((user) => (
                            <Tr key={user.id}>
                                <Td>{user.id}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.contact}</Td>
                                <Td><IconButton  bg={'transparent'} onClick={() => onUserSelect(user.id)}  icon={<TbNews />} aria-label='Agendar para este usuário' /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <Pagination />
        </>
    )
}

export default UserList;
