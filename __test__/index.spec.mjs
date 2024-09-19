import test from 'ava'

import { fetch } from '../index.js'

test('fetch', async (t) => {
    const response = await fetch("https://ifconfig.me")
    t.is(response.status, 200)
})
