#Taking all Classes

const get_classes = require('./get_attribute')

get_classes.get_attribute('http://x.com.br/', 'class', 'x.txt')


#Taking all Ids

const get_ids = require('./get_attribute')

get_ids.get_attribute('http://x.com.br/', 'id', 'x.txt')
