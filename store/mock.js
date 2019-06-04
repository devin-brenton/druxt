export const albumData = {
  data: [
    {
      nid: [{ value: 1 }],
      uuid: [{ value: '482dcdf8-edf9-450b-9b6d-2d63e033c68c' }],
      vid: [{ value: 2 }],
      langcode: [{ value: 'en' }],
      type: [
        {
          target_id: 'album',
          target_type: 'node_type',
          target_uuid: '2366576a-86a6-4fe1-a718-436b34a8bf7e'
        }
      ],
      revision_timestamp: [
        { value: '2019-05-23T19:27:16+00:00', format: 'Y-m-d\\TH:i:sP' }
      ],
      revision_uid: [
        {
          target_id: 1,
          target_type: 'user',
          target_uuid: '6e808c87-a8a0-45bc-85cc-64173fc02a3b',
          url: '/user/1'
        }
      ],
      revision_log: [],
      status: [{ value: true }],
      uid: [
        {
          target_id: 1,
          target_type: 'user',
          target_uuid: '6e808c87-a8a0-45bc-85cc-64173fc02a3b',
          url: '/user/1'
        }
      ],
      title: [{ value: 'The Wall' }],
      created: [
        { value: '2019-05-23T19:10:23+00:00', format: 'Y-m-d\\TH:i:sP' }
      ],
      changed: [
        { value: '2019-05-23T19:27:16+00:00', format: 'Y-m-d\\TH:i:sP' }
      ],
      promote: [{ value: true }],
      sticky: [{ value: false }],
      default_langcode: [{ value: true }],
      revision_translation_affected: [{ value: true }],
      path: [{ alias: null, pid: null, langcode: 'en' }],
      body: [
        {
          value:
            '\u003Cp\u003EPink Floyd\u0027s album The Wall\u003C/p\u003E\r\n',
          format: 'basic_html',
          processed:
            '\u003Cp\u003EPink Floyd\u0027s album The Wall\u003C/p\u003E',
          summary: ''
        }
      ],
      field_album: [
        {
          target_id: 1,
          alt: 'album cover',
          title: '',
          width: 600,
          height: 600,
          target_type: 'file',
          target_uuid: '96bd32d5-9076-4f6f-b0c2-734eb2207815',
          url: 'http://localhost:8989/sites/default/files/2019-05/theWall.png'
        }
      ],
      field_artist: [
        {
          value: 'Pink Floyd',
          format: 'basic_html',
          processed: 'Pink Floyd'
        }
      ]
    }
  ]
}

export const artistData = {
  data: [
    {
      nid: [{ value: 2 }],
      uuid: [{ value: '05412782-fa52-478b-ac24-a890f1755702' }],
      vid: [{ value: 3 }],
      langcode: [{ value: 'en' }],
      type: [
        {
          target_id: 'artist',
          target_type: 'node_type',
          target_uuid: 'd609f22f-e05c-4aba-8d17-4bbdba730590'
        }
      ],
      revision_timestamp: [
        { value: '2019-05-23T19:31:53+00:00', format: 'Y-m-d\\TH:i:sP' }
      ],
      revision_uid: [
        {
          target_id: 1,
          target_type: 'user',
          target_uuid: '6e808c87-a8a0-45bc-85cc-64173fc02a3b',
          url: '/user/1'
        }
      ],
      revision_log: [],
      status: [{ value: true }],
      uid: [
        {
          target_id: 1,
          target_type: 'user',
          target_uuid: '6e808c87-a8a0-45bc-85cc-64173fc02a3b',
          url: '/user/1'
        }
      ],
      title: [{ value: 'Pink Floyd' }],
      created: [
        { value: '2019-05-23T19:31:32+00:00', format: 'Y-m-d\\TH:i:sP' }
      ],
      changed: [
        { value: '2019-05-23T19:31:53+00:00', format: 'Y-m-d\\TH:i:sP' }
      ],
      promote: [{ value: true }],
      sticky: [{ value: false }],
      default_langcode: [{ value: true }],
      revision_translation_affected: [{ value: true }],
      path: [{ alias: null, pid: null, langcode: 'en' }],
      body: [],
      field_artist_pic: [
        {
          target_id: 2,
          alt: 'Members of Pink Floyd',
          title: '',
          width: 329,
          height: 303,
          target_type: 'file',
          target_uuid: 'f1873098-a405-49c4-b0a3-d90bd6a1515a',
          url:
            'http://localhost:8989/sites/default/files/2019-05/Pink_Floyd_-_all_members.jpg'
        }
      ]
    }
  ]
}
