import Image from 'next/image'
import Link from 'next/link'
import { Models } from 'node-appwrite'
import { Separator } from '@/components/ui/separator'
import { getFiles, getTotalSpaceUsed } from '@/lib/actions/file.actions'
import { convertFileSize, getUsageSummary } from '@/lib/utils'
import ActionDropdown from '../components/ActionDropdown'
import { Chart } from '../components/Chart'
import FormattedDateTime from '../components/FormattedDateTime'
import Thumbnail from '../components/Thumbnail'

const Dashboard = async () => {
  try {
    console.log('Dashboard - Starting data fetch...')
    // Parallel requests
    const [files, totalSpace] = await Promise.all([
      getFiles({ types: [], limit: 10 }),
      getTotalSpaceUsed()
    ])
    console.log('Dashboard - Files response:', files)
    console.log('Dashboard - Total space response:', totalSpace)
    // Check if responses are valid
    if (!files) {
      console.error('Dashboard - Files response is null/undefined')
      throw new Error('Failed to fetch files')
    }
    if (!totalSpace) {
      console.error('Dashboard - Total space response is null/undefined')
      throw new Error('Failed to fetch total space')
    }
    // Get usage summary
    const usageSummary = getUsageSummary(totalSpace)
    console.log('Dashboard - Usage summary:', usageSummary)
    // Check if files exist and have documents
    const hasFiles = files && files.documents && files.documents.length > 0
    console.log('Dashboard - Has files:', hasFiles)
    return (
      <div className='dashboard-plain-grid items-start px-2 sm:px-4 lg:px-6'>
        <div className='dashboard-left flex justify-center lg:justify-start'>
          <div className='dashboard-card p-4 sm:p-6 md:p-8 w-full max-w-md lg:max-w-none'>
            <div className="flex justify-center">
              <Chart used={totalSpace.used} total={2 * 1024 * 1024 * 1024}/>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8">
              <h2 className="h3 xl:h2 text-light-100 mb-4 sm:mb-6">Storage by File Type</h2>
              <ul className='dashboard-summary-list'>
                {usageSummary.map((summary) => (
                  <Link
                    href={summary.url}
                    key={summary.title}
                    className='dashboard-summary-card'
                  >
                    <div className='space-y-3'>
                      <div className='flex items-center justify-between gap-3'>
                        <Image
                          src={summary.icon}
                          width={40}
                          height={40}
                          alt={`${summary.title} icon`}
                          className='summary-type-icon'
                        />
                        <h4 className='summary-type-size'>
                          {convertFileSize(summary.size) || '0 B'}
                        </h4>
                      </div>
                      <h5 className='summary-type-title'>{summary.title}</h5>
                      <Separator className='bg-light-300' />
                      <div className='text-center'>
                        <FormattedDateTime
                          date={summary.latestDate}
                          className='text-xs sm:text-sm text-light-200'
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='dashboard-right'>
          <div className='dashboard-card p-4 sm:p-6 md:p-8'>
            <h2 className='h3 xl:h2 text-light-100'>Recent files uploaded</h2>
            {hasFiles
              ? (
                  <ul className='mt-5 flex flex-col gap-5'>
                    {files.documents.map((file: Models.Document) => (
                      <Link
                        href={file.url}
                        target='_blank'
                        className='flex items-center gap-3 group'
                        key={file.$id}
                      >
                        <Thumbnail
                          type={file.type}
                          extension={file.extension}
                          url={file.url}
                        />
                        <div className='recent-file-details flex-1 min-w-0'>
                          <div className='flex flex-col gap-1 flex-1 min-w-0'>
                            <p className='recent-file-name truncate'>{file.name}</p>
                            <FormattedDateTime
                              date={file.$createdAt}
                              className='caption'
                            />
                          </div>
                          <div className='flex-shrink-0 ml-2'>
                            <ActionDropdown file={file} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </ul>
                )
              : (
                  <div className='mt-5'>
                    <p className='empty-list'>No files uploaded</p>
                  </div>
                )}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Dashboard - Error:', error)
    return (
      <div className='dashboard-container'>
        <div className='p-8 text-center'>
          <h2 className='text-xl font-semibold text-red-600 mb-4'>Dashboard Error</h2>
          <p className='text-gray-600 mb-4'>There was an error loading the dashboard:</p>
          <pre className='bg-gray-100 p-4 rounded text-sm text-left overflow-auto'>
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
      </div>
    )
  }
}

export default Dashboard
